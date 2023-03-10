import styles from './ModalDescriptionItem.module.scss'
import PropTypes from 'prop-types';

const ModalDescriptionItem = (props) => {
    return ( 
        <p className={`text text_type_main-default text_color_inactive ${styles.text}`}>
        {props.children} <span className="text text_type_digits-default">{props.data}</span>
      </p>
     );
}
 
ModalDescriptionItem.propTypes = {
  data: PropTypes.number.isRequired
}

export default ModalDescriptionItem;