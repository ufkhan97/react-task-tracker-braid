import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [name, setName] = useState('');
    const [authors, setAuthors] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

const onSubmit = (e) => {
    e.preventDefault();

    if(!name){
        alert('Please enter a name for the file');
        return
    }
    console.log("submit add")
    onAdd({name, authors, selectedFile});

    setName('');
    setAuthors('');
    setSelectedFile(null);
}


  return <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
          <label>Name</label>
            <input type="text"
            placeholder="File Name" 
            value = {name}
            onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="form-control">
          <label>Authors</label>
            <input type="text" 
            placeholder="File Authors"
            value = {authors}
            onChange={(e) => setAuthors(e.target.value)}/>
      </div>
      <div className="form-control">
          <label>Select File</label>
            <input type="File" 
            value = {selectedFile}
            onChange={(e) => {   setSelectedFile(e.target.value); }}
             />
      </div>
      <input type="submit" value="Submit" className = "btn btn-block"/>
  </form>;
};

export default AddTask;
