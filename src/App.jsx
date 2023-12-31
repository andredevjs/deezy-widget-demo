import "deezy-widget/dist/style.css";
import "./App.css";
import { dynamicImportComponent } from "./util";

const InscriptionPreview = dynamicImportComponent("InscriptionPreview");
const ListBids = dynamicImportComponent("ListBids");
const BidWidget = dynamicImportComponent("BidWidget");
const CurrentBid = dynamicImportComponent("CurrentBid");

function App() {
  // get query string parameter inscriptionId
  const urlParams = new URLSearchParams(window.location.search);
  const inscriptionId =
    urlParams.get("inscriptionId") ||
    "97b58013212c065c78e66e3c69ea0750396a6c7e84578da03c06362f8f526501i0";

  return (
    <div className="App">
      <section className="section-auction">
        <div className="w-container">
          <div className="auction-container">
            <div className="column preview">
              <div className="img-container">
                <div className="img-preview">
                  <InscriptionPreview
                    utxo={{
                      inscriptionId,
                      contentType: "image/webp",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="column info">
              <div className="inscription-info-container">
                <div className="inscription-info">
                  <p className="inscription-title">Babe 404</p>
                </div>
                <div>
                  <CurrentBid inscriptionId={inscriptionId} />
                </div>
                <div className="bid-form">
                  <BidWidget
                    inscriptionId={inscriptionId}
                    suggestedPrice={1000}
                  />
                </div>
                <ListBids inscriptionId={inscriptionId} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
