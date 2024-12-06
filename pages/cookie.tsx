export async function getServerSideProps(context) {
    // Access cookie value from query parameter
    const { myCookie } = context.query;

    // Use the cookie value in SSR
    console.log('Received Cookie in SSR:', myCookie);

    return {
        props: {
            myCookie, // Pass the cookie value to the page
        },
    };
}

const SSRPage = ({ myCookie }) => {
    return (
        <div>
            <h1>Server-Side Rendered Page</h1>
            <p>Cookie Value (from frontend): {myCookie}</p>
        </div>
    );
};

export default SSRPage;
