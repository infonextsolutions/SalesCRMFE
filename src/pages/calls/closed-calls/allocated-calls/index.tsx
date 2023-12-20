import DUMMY from "@/shared/dummy";
import React, { useEffect } from "react";
import axios from "axios";
import dummy from "@/shared/dummy";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useRouter } from "next/router";
import Navbar from "@/components/app/Navbar/Navbar";
import ScheduleCallsContainer from "@/components/calls/active-calls/Container/ScheduleCallContainer";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const AllocatedCallsCC = ({ data }: any) => {
    const router = useRouter();

    useEffect(() => {
        const handleBeforeHistoryChange = () => {
            router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
            router.beforePopState(() => {
                router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
                return true;
            });
        };

        handleBeforeHistoryChange();

        return () => {
            router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
        };
    }, []);

    return (
        <>
            <Navbar mainTitle={"Close Reviews "} title={"Allocated Calls"} src="ClosedCalls" />
            <div className="w-[100%] min-h-[90vh] pl-[40px] pr-[40px]">
                <hr className="border-t-2 border-gray-300 mb-4" />
                <ScheduleCallsContainer data={data} dummy1={DUMMY} dummy2={dummy} />
            </div>
        </>
    );
};

export async function getServerSideProps({ query, ...params }: any) {
    const response = await axios.get(
        "https://salescrmbe.onrender.com/api/active-call/find-all"
    );
    return {
        props: {
            data: response.data || {},
        },
    };
}

export default AllocatedCallsCC;
