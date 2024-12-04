import { useRef } from "react";
import { actions } from "../../action";
import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/UseAxios";
import UseProfile from "../../hooks/UseProfile";

export default function ProfileImg() {
  const { state, dispatch } = UseProfile();
  const { api } = useAxios();
  const fileUploaderRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );
      if (response.status === 200) {
        dispatch({
          type: actions.profile.IMAGE_UPDATED,
          data: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <>
      <div className="relative mb-80 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px] ">
        <img
          className="max-w-full"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
          alt="sumit saha"
        />

        <form action="">
          <button
            type="submit"
            onClick={handleImageUpload}
            className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          >
            <img src={EditIcon} alt="Edit" />
          </button>
          <input id="file" type="file" ref={fileUploaderRef} hidden />
        </form>
      </div>
    </>
  );
}
