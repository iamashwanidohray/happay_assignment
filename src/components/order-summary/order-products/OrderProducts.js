import React from 'react';
import './OrderProducts.css';

function OrderProducts() {
    return(
        <div classNameName="table__card">
            <table className="order__table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Items</th>
                        <th>QTY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Smith</td>
                        <td><div className="number">
                                <button className="minus">-</button>
                                <input type="text" value="1"/>
                                <button className="plus">+</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jackson</td>
                        <td>
                            <div className="number">
                                <button className="minus">-</button>
                                <input type="text" value="1"/>
                                <button className="plus">+</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Johnson</td>
                        <td>
                            <div className="number">
                                <button className="minus">-</button>
                                <input type="text" value="1"/>
                                <button className="plus">+</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OrderProducts;