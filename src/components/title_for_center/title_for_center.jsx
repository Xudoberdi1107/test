import TitleCenter from './style.module.scss'
const TitleForCenter = ({title}) => {
   
    return (
        <div className={TitleCenter.title_for_page}>
            <h4>{title}</h4>
        </div>
        
    );
};

export default TitleForCenter;