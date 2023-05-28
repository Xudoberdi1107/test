import TitlePages from './style.module.scss'
const TitleForPages = ({title}) => {
   
    return (
        <div className={TitlePages.title_for_page}>
            <h1>{title}</h1>
        </div>
        
    );
};

export default TitleForPages;