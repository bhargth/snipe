import AdminsupportForm from './adminsupportform';

const NewadminsupportForm = () => {
  const addFormHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <AdminsupportForm onAddQuote={addFormHandler} />;
};

export default NewadminsupportForm;