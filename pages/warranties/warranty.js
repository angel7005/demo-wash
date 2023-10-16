import   
{
  React,
  useContext,
  useEffect,
  useState, 
  useRef
} from "react";

import Head from "next/head";
import axios from "axios";

import {WarrantyContext} from "./warranty_context";
import WarrantyProvider from "./warranty_provider";

import WarrantyTable from './wrdt'

export default function Home() {

return (
    <>
      {" "}
      <div >        
        <WarrantyProvider >          
            <WarrantyTable />
        </WarrantyProvider>                      
      </div>
    </>    
  );
};