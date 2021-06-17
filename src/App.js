import Row from './components/Row.jsx';
import requests from './request.jsx';
import './index.css'
import Banner from './Banner.jsx';
import Nav from './Nav.jsx';

function App() {
  return (
    <div className="App">

      <Nav />

      <Banner fetchUrl={requests.fetchTrending} />

      <Row title="Netflix Originals" isLarger={false} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" isLarger={false} fetchUrl={requests.fetchTrending} />
      <Row title="Action" isLarger={true} fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance" isLarger={true} fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated" isLarger={true} fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" isLarger={true} fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}
export default App;
