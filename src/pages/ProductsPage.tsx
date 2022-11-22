import {useEffect, useState} from "react"
import {useSearchParams} from "react-router-dom";
import API from "../API";
import ProductGroup from "../components/ProductGroup";
import TableProduct from "../components/TableProduct";
import {CategoryEntity, Response, SuccessfulResponse} from "../entity";

function ProductsPage() { // Get specific products
    const [searchParams, setSearchParams] = useSearchParams();

    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState({});
    const [isSearchGroup, setIsSearchGroup] = useState(false);
    const [isCategorySelected, setIsCategorySelected] = useState(false);

    useEffect(() => {
        fetch(`${API.baseUrlTechbiz}/products/categories`)
            .then(res => res.json())
            .then((res : Response) => {
            if (!res.success) {
                throw new Error("Something was wrong!")
            }

            const successRes = (res as SuccessfulResponse);

            const categories = successRes.data.categories;
            if (categories) {
                setCategories(categories);
            }
        }).catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if (searchParams.get('selectedIds')) {
            setIsSearchGroup(true);
        } else {
            setIsSearchGroup(false);
        }
    }, [searchParams.get('selectedIds')])

    const selectCategory = (e : any, category : CategoryEntity) => {
        setCategorySelected(category);
        setIsCategorySelected(true);

        document.querySelectorAll('.list-group-item').forEach(el => el.classList.remove('active'));

        e.currentTarget.classList.add('active');
    }


    return isSearchGroup 
        ? (
            <ProductGroup ids={searchParams.get('selectedIds') as string}/>
        ) 
        : (<section id="products">
            <div className="container">
                <h2>Categorias</h2>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            {
                            categories.map((category : CategoryEntity) => (
                                <li 
                                    key={category.CategoryID}
                                    className="list-group-item"
                                    onClick={(e) => selectCategory(e, category)}>
                                    <h5>{category.Name}</h5>
                                    <small>{category.Description}</small>
                                </li>
                            ))
                        } </ul>
                    </div>
                    {
                    isCategorySelected ? <TableProduct category={
                        (categorySelected as CategoryEntity)
                    }/> : <></>
                } </div>
            </div>
        </section>
    );
}


export default ProductsPage;
