export default getConfig = () => (
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
)