
import React from 'react';


interface CompanyInfo {
    nume: string;
    nrTelefon: string;
    email: string;
    parteneri: string[];
    dataInfiintare: string;
}


interface ExtendedCompanyInfo extends CompanyInfo {
    adresa: string;
    website: string;
}

const About: React.FC = () => {

    const companyData: CompanyInfo = {
        nume: 'Numele Companiei',
        nrTelefon: '0123456789',
        email: 'companie@example.com',
        parteneri: ['Partener 1', 'Partener 2', 'Partener 3'],
        dataInfiintare: '01/01/2000',
    };


    const extendedCompanyData: ExtendedCompanyInfo = {
        ...companyData,
        adresa: 'Str. Exemplu, Nr. 123',
        website: 'www.exemplu.com',
    };

    return (
        <div>
            <h1>Despre Noi</h1>
            <h2>Informații Companie:</h2>
            <p>Nume: {companyData.nume}</p>
            <p>Număr Telefon: {companyData.nrTelefon}</p>
            <p>Email: {companyData.email}</p>
            <p>Parteneri: {companyData.parteneri.join(', ')}</p>
            <p>Data înființării: {companyData.dataInfiintare}</p>

            <h2>Informații Extinse Companie:</h2>
            <p>Adresă: {extendedCompanyData.adresa}</p>
            <p>Website: {extendedCompanyData.website}</p>
        </div>
    );
};

export default About;
