import axios from "axios";
import Head from "next/head";
import   
{
  React,
  useContext,
  useEffect,
  useState, 
  useRef
} from "react";

import {WarrantyContext} from "./warranty_context";
import WarrantyProvider from "./warranty_provider";
import WarrantyTable from './wrdt'
import withSession from '../../lib/session';

export default function Home({user}) {
  return (
        <>
          {" "}
          <h2> Welcome to warranty manager {user?.username}!</h2>
          <a href='/api/logout'>Logout</a>

          <div >        
            <WarrantyProvider >          
                <WarrantyTable />
            </WarrantyProvider>                      
          </div>
        </>    
  );
};


export const getServerSideProps = withSession(async function ({req, res}){
    const user = req.session.get("user");

    if(user === undefined) {
      res.setHeader("location", "/users/login");
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    console.log("mi cookie: " + req.session.get("user"))

    return {
      props: {user: req.session.get("user")},
    };
});