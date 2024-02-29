import React from 'react';
import Nav from './Nav/Nav';

const Deafult = ({children}) => {
    return (
        <div>
            <Nav />
            <main>
                {
                    children
                }
            </main>
            <footer>
                Footer
            </footer>
        </div>
    );
}

export default Deafult;
