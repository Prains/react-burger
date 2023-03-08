import ModalDescriptionItem from '../ModalDescriptionItem/ModalDescriptionItem';
import styles from './ModalDescriptionBox.module.scss'
import PropTypes from 'prop-types';

const ModalDescriptionBox = (props) => {
    return (  
        <div className={styles.box}>
            <ModalDescriptionItem data={props.data.calories}>Калории, ккал</ModalDescriptionItem>
            <ModalDescriptionItem data={props.data.proteins}>Белки, г</ModalDescriptionItem>
            <ModalDescriptionItem data={props.data.fat}>Жиры, г</ModalDescriptionItem>
            <ModalDescriptionItem data={props.data.carbohydrates}>Углеводы, г</ModalDescriptionItem>
        </div>
    );
}
 
ModalDescriptionBox.propTypes = {
    data: PropTypes.object
}

export default ModalDescriptionBox;