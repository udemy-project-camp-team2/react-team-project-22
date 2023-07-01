import { MoonLoader } from "react-spinners";

const override = {      
    borderColor: "#fff",
    textAlign: "center",
  };

  const Loading = ({ loading }) => {
    return (
      <div style={{display:"flex",justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <MoonLoader
          color="#fff"
          loading={loading}
          cssOverride={override}
          size={100}
        />
      </div>
    );
  };

  export default Loading;