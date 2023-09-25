const DashboardLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <div>
                left child 
            </div>
            {children}
        </div>
     );
}
 
export default DashboardLayout;