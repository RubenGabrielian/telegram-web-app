import {RotatingLines} from "react-loader-spinner";

export default function Loading () {
    return (
        <div className="loading">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="white"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}
