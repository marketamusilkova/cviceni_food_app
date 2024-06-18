import classes from './Header.module.css';
import headerLogo from '../../assets/logo.png';

export const Header = () => (
    <header className={classes.header}>
        <div className={classes.headerTitle}>
            <img src={headerLogo} alt="RG Foot" />
            <h1>RG Food</h1>
        </div>
        <nav>
            <button>Košík</button>
        </nav>
    </header>
);
