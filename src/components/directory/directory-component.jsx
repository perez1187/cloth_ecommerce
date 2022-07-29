import CategoryItem from '../category-item/category-item-component';
import './directory-styles.scss';

const Directory = ({categories}) => {
    return (
        <div className='directory-container'>
            {/* {categories.map(({id, title, imageUrl}) => ( */}
            {categories.map((category) => ( //  przesylajac caly obiekt nie musimy wysylac listy/array
            <CategoryItem key= {category.id} category={category}/>
            ))
            }      
      </div> // categories-container
    )
}

export default Directory