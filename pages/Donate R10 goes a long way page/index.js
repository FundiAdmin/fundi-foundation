import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import DonateR10GoesAlongWay from '../../components/DonateR10GoesAlongWay'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Head from 'next/head'

const DonateR10GoesAlongWayPage =() => {
    return(
        <Fragment>
             <Head>
                <title>Donate</title>
            </Head>
            <Header/>
            <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <DonateR10GoesAlongWay/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonateR10GoesAlongWayPage;
