export const ALLOCATED_CALL = {
  name: "Allocated Call",
  className: "klk",
  children: [
    {
      type: "MAINLAYOUT",
      navTitle: "Open Reviews > Allocated Call >",
      navTitleMain: "Allocated call",
      navTitleIconSrc: "/assets/sidebar/darker/call.svg",
      children: [
        {
          type: "CUSTOMTABLE",
          actions: [],
          api: "https://salescrmbe.onrender.com/api/active-call/find-all",
          tableItems: [
            {
              property: "callID",
            },
            {
              property: "callTitle",
            },
            {
              property: "leadID",
            },
            {
              property: "leadTitle",
            },
            {
              property: "participants",
            },
            {
              property: "callOwner",
            },
            {
              property: "teamManager",
            },
            {
              property: "clientPOC",
            },
            {
              property: "companyName",
            },
            {
              property: "callDateAndTime",
            },
            {
              property: "productService",
            },
            {
              property: "callDuration",
            },
            {
              property: "callDisposition",
            },
            {
              property: "callType",
            },
            {
              property: "callScore",
            },
            {
              property: "callReviewType",
            },
            {
              property: "callReviewStatus",
            },
            {
              property: "closeDate",
            },
            {
              property: "allocatedOn",
            },
            {
              property: "reviewDueDate",
            },
            {
              property: "lastUpdateOn",
            },
          ]
          ,
          tableHeaders: [
            {
              text: "Call ID",
            },
            {
              text: "Call Title",
            },
            {
              text: "Lead ID",
            },
            {
              text: "Lead Title",
            },
            {
              text: "Participants",
            },
            {
              text: "Call Owner",
            },
            {
              text: "Team manager",
            },
            {
              text: "Client POC",
            },
            {
              text: "Company Name",
            },
            {
              text: "Call Date & Time",
            },
            {
              text: "Product/Service",
            },
            {
              text: "Call Duration",
            },
            {
              text: "Call Disposition",
            },
            {
              text: "Call Type",
            },
            {
              text: "Call Score",
            },
            {
              text: "Call Review Type",
            },
            {
              text: "Call Review Status",
            },
            {
              text: "Close Date",
            },
            {
              text: "Allocated On",
            },
            {
              text: "Review Due date",
            },
            {
              text: "Last Update On",
            },
          ],
          filters: [
            {
              type: "select",
              sliceName: "feedbackCallFilter",
              name: "callReviewStatus",
              label: "CallReview Status",
              className: "filer-class-1",
              onClickApi: "API call on click",
              options: [
                { label: "Open", value: "Open" },
                { label: "Close", value: "Close" }
                // add more filter options
              ]
            },
            {
              type: "select",
              sliceName: "feedbackCallFilter",
              name: "productService",
              label: "Product/Service",
              className: "filer-class-1",
              onClickApi: "API call on click",
              options: [
                { label: "Product A", value: "Product A" },
                { label: "Product B", value: "Product B" }
                // add more filter options
              ]
            },
            {
              type: "select",
              sliceName: "feedbackCallFilter",
              name: "callDisposition",
              label: "Call Disposition",
              className: "filer-class-1",
              onClickApi: "API call on click",
              options: [
                { label: "Follow Up", value: "Follow Up" },
                { label: "Folllow Up 2", value: "Follow Up 2" }
                // add more filter options
              ]
            },
            {
              type: "select",
              sliceName: "feedbackCallFilter",
              name: "callType",
              label: "Call Type",
              className: "filer-class-1",
              onClickApi: "API call on click",
              options: [
                { label: "Open", value: "Open" },
                { label: "Close", value: "Close" }
                // add more filter options
              ]
            },
            {
              type: "slider",
              sliceName: "feedbackCallFilter",
              name: "callDuration",
              label: "Call Duration",
              className: "filer-class-1",
              onClickApi: "API call on click",
              minMaxCalue: [0, 60],
              step: 1
            },
            {
              type: "multiDatePicker",
              sliceName: "feedbackCallFilter",
              name: "feedbackRequestedOn",
              label: "Feedback Requested On",
              className: "filer-class-1",
              onClickApi: "API call on click"
            },
            {
              type: "multiDatePicker",
              sliceName: "feedbackCallFilter",
              name: "reviewDueDate",
              label: "Review Due Date",
              className: "filer-class-1",
              onClickApi: "API call on click"
            }
          ],
          className:
            "w-[100%] h-auwpabw  overflow-y-auto pl-[20px] pr-[30px] pt-[20px]",
        },
      ],
    },
  ],
};