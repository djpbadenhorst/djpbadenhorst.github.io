import { useCookies } from 'react-cookie';
import crypto from 'crypto';

import { Container } from './components/Container';

function App() {
  const [cookies, setCookies] = useCookies(['loggedIn']);
  const auth = () => {
    console.log('HERE');
    //if (crypto.createHash('md5').update('password').digest('hex') == '07d5463afe615a43d9b9eab6e57dc563')
    //  setCookies('loggedIn',true);
    setCookies('loggedIn',true);
  };
  const logout = () => {
    setCookies('loggedIn',false);
  };
  return (
    <>
      <div className="flex flex-row w-screen h-screen justify-center items-center">
        <Container className="basis-1/4 h-1/2"/>
      </div>
    </>
  );
}

export default App;
/*
        {cookies.loggedIn ? (
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={logout}>
          Log Out
        </button>
      ) : (
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={auth}>
          Log In
        </button>
        )}

        

            <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={auth}>
          Not Logged In
        </button>
        </form>
      <div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
*/
