import "../styles/global.css"

const App = ({Component,pageProps}) => {
    React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  
  return <Component {...pageProps}/> 
}
export default App;

