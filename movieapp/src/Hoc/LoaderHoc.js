import React ,{Componant} from "react";
import "./LoaderHoc.css";

const LoaderHoc=(Wrappedcomponante)=>{
return class LoaderHoc extends Componant{
    render()
    {
      return <Wrappedcomponante {...this.props} />
    }
}
return LoaderHoc;
};
export default LoaderHoc;