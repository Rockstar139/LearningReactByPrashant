import styles from "./ErrorMsg.module.css";

const ErrorMsg = ({ errorMessage }) => {
  return (
    <div className="container">
          <div className={`row ${styles.rowSpace}`}>
            <div className={`col-10 `}>
              <h5 className="alert alert-danger">{errorMessage}</h5>
            </div>
            
          </div>
        </div>
    
  );
};

export default ErrorMsg;
