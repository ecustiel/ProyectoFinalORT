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

  return {
    regPublication,
  };
};
