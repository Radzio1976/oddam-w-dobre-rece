import React from 'react';

class HomeHeader extends React.Component {
    render() {
        return (
            <header className="header-container">
                <div className="header-image">
                </div>
                <div className="header-text">
                    <div className="header-text-upper">
                        <h1>Zacznij pomagać!</h1>
                        <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    </div>
                    <div className="header-text-lower">
                        <div className="header-text-lower-left-button">
                            <h1>Oddaj</h1>
                            <h1>Rzeczy</h1>
                        </div>
                        <div className="header-text-lower-right-button">
                            <h1>Zorganizuj</h1>
                            <h1>Zbiórkę</h1>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HomeHeader