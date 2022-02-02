import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
  // const onClick = () => {
  //   console.log('Button clicked');
  // }
  
  return <header className="header">
    <h1>{title}</h1>
    <Button  onClick={onAdd}
    text={showAdd ? 'Cancel' : 'Upload File'} 
    color={showAdd ? 'red': 'teal'}
    />
  </header>
};

Header.defaultProps = {
  title: 'Braid Science'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;


