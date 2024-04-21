import "./App.css";
import RandomColor from "./components/Random-Colors";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QrCodeGenarator from "./components/qr-code-genarator";
import LightDarkMOde from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/Custom-Tabs/tab-test";
import ModalTest from "./components/custom-model-popup/modal-test";
import GitHubProfileleFinder from "./components/git-hub-proile-finder";
import SearchAutocomplete from "./components/git-hub-proile-finder/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tact-toe";
import UseOnclickOutsideTest from "./components/use-outside-click/test";


function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian/> */}
      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products component */}
      {/* <LoadMoreData/> */}

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator */}
      {/* <QRCodeGenerator/> */}

      {/* light and dark theme switch */}
      {/* <LightDarkMode/> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom tabs component */}
      {/* <TabTest />  */}

      {/* custom model popup */}
      {/* <ModalTest/> */}

      {/*  Github profile finder */}
      {/* <GitHubProfileleFinder /> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete/> */}

      {/* Tic tac toe */}
      {/* <TicTacToe/> */}

      {/* Use Onclick Outside Hook Test */}
       <UseOnclickOutsideTest />

    {/* <Weather/> */}
    </div>
  );
}

export default App;
