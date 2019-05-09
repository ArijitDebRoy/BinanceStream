import React from 'react';
import ContentLoader from 'react-content-loader';

function AllMarket(props) {
    return (
        <table className="table table-striped mt-4" style={{'fontSize': '0.8rem'}}>
            <thead>
            <tr>
                <th scope="col">Pair</th>
                <th scope="col">Last price</th>
                <th scope="col">24h High</th>
                <th scope="col">24h Low</th>
                <th scope="col">24h Volume</th>
                <th scope="col">Total Trades</th>
            </tr>
            </thead>
            <tbody>
            { props.market.length === 0 && [...Array(3)].map((x, i) =>
                <tr key={i}>
                    <th scope="row">
                        <ContentLoader height={160} width={400} speed={2} primaryColor="#f3f3f3" secondaryColor="#dadada" key={i}>
                            <rect x="14" y="10" rx="3" ry="3" width="374" height="38" />
                        </ContentLoader>
                    </th>
                    <td>
                        <ContentLoader height={160} width={400} speed={2} primaryColor="#f3f3f3" secondaryColor="#dadada">
                            <rect x="14" y="10" rx="3" ry="3" width="374" height="38" />
                        </ContentLoader>
                    </td>
                    <td>
                        <ContentLoader height={160} width={400} speed={2} primaryColor="#f3f3f3" secondaryColor="#dadada">
                            <rect x="14" y="10" rx="3" ry="3" width="374" height="38" />
                        </ContentLoader>
                    </td>
                    <td>
                        <ContentLoader height={160} width={400} speed={2} primaryColor="#f3f3f3" secondaryColor="#dadada">
                            <rect x="14" y="10" rx="3" ry="3" width="374" height="38" />
                        </ContentLoader>
                    </td>
                    <td>
                        <ContentLoader height={160} width={400} speed={2} primaryColor="#f3f3f3" secondaryColor="#dadada">
                            <rect x="14" y="10" rx="3" ry="3" width="374" height="38" />
                        </ContentLoader>
                    </td>
                    <td>
                        <ContentLoader height={160} width={400} speed={2} primaryColor="#f3f3f3" secondaryColor="#dadada">
                            <rect x="14" y="10" rx="3" ry="3" width="374" height="38" />
                        </ContentLoader>
                    </td>
                </tr>
                )
            }
            {
                props.market.length > 0 && props.market.map((market, index) => {
                    return(
                        <tr key={index}>
                            <th scope="row">{market.s}</th>
                            <td>{market.c}</td>
                            <td>{market.h}</td>
                            <td>{market.l}</td>
                            <td>{parseFloat(market.q).toFixed(2)}</td>
                            <td>{market.n}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default AllMarket;
