import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import Image from 'next/image';

const Sidebar = () => {
    const [menuStates, setMenuStates] = useState({
        basicUiMenuOpen: false,
        formElementsMenuOpen: false,
        tablesMenuOpen: false,
        iconsMenuOpen: false,
        chartsMenuOpen: false,
        userPagesMenuOpen: false,
        errorPagesMenuOpen: false
    });

    const pathname = usePathname();

    const toggleMenuState = (menuState: string) => {
        setMenuStates(prev => {
            if (prev[menuState as keyof typeof prev]) {
                return { ...prev, [menuState]: false };
            } else {
                // Fecha todos os menus antes de abrir o novo
                const newState = Object.keys(prev).reduce((acc, key) => {
                    acc[key as keyof typeof prev] = false;
                    return acc;
                }, {} as typeof menuStates);

                return { ...newState, [menuState]: true };
            }
        });
    };

    const isPathActive = (path: string) => {
        return pathname.startsWith(path);
    };

    useEffect(() => {
        onRouteChanged();
        setupHoverEvents();
    }, [pathname]);

    const onRouteChanged = () => {
        document.querySelector("#sidebar")?.classList.remove("active");

        // Fecha todos os menus
        setMenuStates(prev => {
            const newState = { ...prev };
            Object.keys(newState).forEach(key => {
                newState[key as keyof typeof newState] = false;
            });
            return newState;
        });

        // Define os menus ativos baseados na rota atual
        const dropdownPaths = [
            { path: "/apps", state: "appsMenuOpen" },
            { path: "/basic-ui", state: "basicUiMenuOpen" },
            { path: "/advanced-ui", state: "advancedUiMenuOpen" },
            { path: "/form-elements", state: "formElementsMenuOpen" },
            { path: "/tables", state: "tablesMenuOpen" },
            { path: "/maps", state: "mapsMenuOpen" },
            { path: "/icons", state: "iconsMenuOpen" },
            { path: "/charts", state: "chartsMenuOpen" },
            { path: "/user-pages", state: "userPagesMenuOpen" },
            { path: "/error-pages", state: "errorPagesMenuOpen" },
            { path: "/general-pages", state: "generalPagesMenuOpen" },
            { path: "/ecommerce", state: "ecommercePagesMenuOpen" }
        ];

        dropdownPaths.forEach(obj => {
            if (isPathActive(obj.path)) {
                setMenuStates(prev => ({ ...prev, [obj.state]: true }));
            }
        });
    };

    const setupHoverEvents = () => {
        const body = document.querySelector("body");
        document.querySelectorAll(".sidebar .nav-item").forEach(el => {
            el.addEventListener("mouseover", function () {
                if (body?.classList.contains("sidebar-icon-only")) {
                    el.classList.add("hover-open");
                }
            });
            el.addEventListener("mouseout", function () {
                if (body?.classList.contains("sidebar-icon-only")) {
                    el.classList.remove("hover-open");
                }
            });
        });
    };

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item navbar-brand-mini-wrapper">
                    <Link
                        className="nav-link navbar-brand brand-logo-mini"
                        href="/dashboard"
                    >
                        <Image
                            src="/assets/images/logo-mini.svg"
                            alt="logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                </li>

                {/* Perfil do usuário */}
                <li className="nav-item nav-profile">
                    <div className="nav-link">
                        <div className="profile-image">
                            <Image
                                className="img-xs rounded-circle"
                                src="/assets/images/faces/face8.jpg"
                                alt="profile"
                                width={40}
                                height={40}
                            />
                            <div className="dot-indicator bg-success"></div>
                        </div>
                        <div className="text-wrapper">
                            <p className="profile-name">Henry Klein</p>
                            <p className="designation">
                                <Trans>Administrator</Trans>
                            </p>
                        </div>
                        <div className="icon-container">
                            <i className="icon-bubbles"></i>
                            <div className="dot-indicator bg-danger"></div>
                        </div>
                    </div>
                </li>

                {/* Item do menu Dashboard */}
                <li className="nav-item nav-category">
                    <span className="nav-link">
                        <Trans>Dashboard</Trans>
                    </span>
                </li>
                <li className={isPathActive("/dashboard") ? "nav-item active" : "nav-item"}>
                    <Link className="nav-link" href="/dashboard">
                        <span className="menu-title">
                            <Trans>Dashboard</Trans>
                        </span>
                        <i className="icon-screen-desktop menu-icon"></i>
                    </Link>
                </li>

                {/* Menu Basic UI (exemplo) */}
                <li className={isPathActive("/basic-ui") ? "nav-item active" : "nav-item"}>
                    <div
                        className={menuStates.basicUiMenuOpen ? "nav-link menu-expanded" : "nav-link"}
                        onClick={() => toggleMenuState("basicUiMenuOpen")}
                        data-toggle="collapse"
                    >
                        <span className="menu-title">
                            <Trans>Basic UI Elements</Trans>
                        </span>
                        <i className="icon-layers menu-icon"></i>
                    </div>
                    <Collapse in={menuStates.basicUiMenuOpen}>
                        <div>
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <Link
                                        className={isPathActive("/basic-ui/buttons") ? "nav-link active" : "nav-link"}
                                        href="/basic-ui/buttons"
                                    >
                                        <Trans>Buttons</Trans>
                                    </Link>
                                </li>
                                {/* Outros itens do submenu... */}
                            </ul>
                        </div>
                    </Collapse>
                </li>

                {/* Outros menus... (estrutura similar) */}

                {/* Documentação */}
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="http://bootstrapdash.com/demo/stellar-react-free/documentation/documentation.html"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <span className="menu-title">
                            <Trans>Documentation</Trans>
                        </span>
                        <i className="icon-folder-alt menu-icon"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;