import Salesforce from "../svgs/salesforce.svg"
import Bigquery from "../svgs/bq.svg"
import CouchDB from "../svgs/couchdb.svg"
import MongoDG from "../svgs/mongodb.svg"
import PostgreSQL from "../svgs/postgresql.svg"
import Snowflake from "../svgs/snowflake.svg"
import Stripe from "../svgs/stripe.svg"
import Twilio from "../svgs/twilio.svg"
import GoogleSheets from "../svgs/google-sheets.svg"
import Oracle from "../svgs/oracle.svg"
import Jira from "../svgs/jira.svg"

const integrations = [
    {
        img: <img src={Salesforce} alt="Salesforce" />,
        name: "Salesforce"

    },
    {
        img:  <img src={MongoDG} alt="MongoDG" />,
        name: "MongoDB"
        
    },
    {
        img:  <img src={Snowflake} alt="Snowflake" />,
        name: "Snowflake"
        
    },
    {
        img:  <img src={Bigquery} alt="Bigquery" />,
        name: "BigQuery"
        
    },
    {
        img:  <img src={Stripe} alt="Stripe" />,
        name: "Stripe"
        
    },
    {
        img:  <img src={Twilio} alt="Twilio" />,
        name: "Twilio"
    },
    {
        img:  <img src={GoogleSheets} alt="GoogleSheets" />,
        name: "Google Sheets"
    },
    {
        img:  <img src={Oracle} alt="Oracle" />,
        name: "Oracle"
    },
    {
        img:  <img src={CouchDB} alt="CouchDB" />,
        name: "CouchDB"
    },
    {
        img:  <img src={Jira} alt="Jira" />,
        name: "Jira"
    },
    {
        img:  <img src={PostgreSQL} alt="PostgreSQL" />,
        name: "PostgreSQL"
    },
]

export default integrations;