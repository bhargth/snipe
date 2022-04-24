import StudentForm from './studentform';

const NewstudentForm = () => {
  const addFormHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <StudentForm onAddQuote={addFormHandler} />;
};

export default NewstudentForm;