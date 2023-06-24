const Notification = ({added}) => {
    if(added != false) {
        return <p className="added-message">New Reading Added</p>
    }
    return ( 
        <>
        </>
     );
}
 
export default Notification;