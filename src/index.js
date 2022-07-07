import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './components/Error/index';
import Footer from './components/Footer';
import Header from './components/Header/index';
import Freelances from './pages/Freelances';
import Home from './pages/Home';
import Results from './pages/Results';
import Survey from './pages/Survey';
import { ThemeProvider, SurveyProvider } from './utils/context';
import GlobalStyle from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/freelances" element={<Freelances />} />
                        <Route path="/results" element={<Results />} />
                        <Route
                            exact
                            path="/survey/:questionNumber"
                            element={<Survey />}
                        />
                        <Route
                            exact
                            path="/survey/43"
                            element={<Freelances />}
                        />
                        <Route path="/*" element={<Error />} />
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
