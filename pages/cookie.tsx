import { GetServerSideProps, NextPage } from 'next';
import { parse } from 'cookie';

// Define types for the props that will be passed to the component
interface PageProps {
  token: string | null; // `token` can be a string or null if not found
}

const Page: NextPage<PageProps> = ({ token }) => {
  return (
    <div>
      <h1>Cookie Value</h1>
      <p>Token: {token}</p>
    </div>
  );
};

// Define getServerSideProps with the appropriate types
export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  // Parse the cookies from the request headers
  const cookies = context.req.headers.cookie || '';
  const parsedCookies = parse(cookies);

  // Get the specific cookie value
  const token = parsedCookies.__my_token || null;

  // Return the cookie value as a prop to the page
  return {
    props: {
      token,
    },
  };
};

export default Page;
