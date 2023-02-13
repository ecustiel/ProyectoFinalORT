import registerPub from "../Api/registerPubApi";
//import useFormContext from "../../Hooks/useFormContext";

export const useRegisterPubStore = () => {
  //const { publication, handleChange } = useFormContext();

  const regPublication = async (publication) => {
    try {
      const { data } = await registerPub.post(
        "/registerProduct/regPublication",
        publication
      );

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getPublications = async () => {
    try {
      const { data } = await registerPub.get("/search");
      //(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getPublicationsById = async () => {
    try {
      const { data } = await registerPub.get("/publication/:id");
      //(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const itemListRegister = async (itemList) => {
    try {
      const { data } = await registerPub.post("/itemsControl", itemList);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return {
    regPublication,
    getPublications,
    getPublicationsById,
    itemListRegister,
  };
};
