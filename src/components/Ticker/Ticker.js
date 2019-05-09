import React from 'react';
import ContentLoader from "react-content-loader"

function Ticker(props) {
    return (
        <div className="card">
            { !props.streams.hasOwnProperty('s') &&
                <ContentLoader height={160} width={400} speed={2} primaryColor="#ffffff" secondaryColor="#dadada">
                    <rect x="71" y="28" rx="0" ry="0" width="239" height="116"/>
                </ContentLoader>
            }
            { props.streams.hasOwnProperty('s') &&
                <div className="card-body">
                    <h6 className="card-title">{props.streams.s != null && props.streams.s.split('BTC').join('/BTC')}<span
                        className="float-right">{props.streams.P}%</span></h6>
                    <div className="mb-2 text-secondary">
                        <span className="font-weight-bold">{props.streams.c}</span>
                        <span className="pl-3">{props.streams.b}</span>
                    </div>
                    <p className="m-0 text-secondary"
                       style={{'fontSize': '0.8rem'}}>Volume: {props.streams.q != null && parseFloat(props.streams.q).toFixed(2)} BTC</p>
                </div>
            }
        </div>
    );
}

export default Ticker;
