import { getBasicIcon } from '@/utils/AssetsHelper';
import Image from 'next/image';
import React, { useRef, useState } from 'react'

const RenderCheckBox = ({ width, bool, onUpdate, row }: any) => {
    const [check, setCheck] = useState(false);
    React.useEffect(() => {
        if (check) {
            if (bool) {
                ref.current.checked = true;
            } else {
                ref.current.checked = false;
            }
        }
        setCheck(true);
    }, [bool]);
    const ref: any = useRef();
    return (
        <div
            className={`flex items-center justify-center h-[20px] shrink-0 `}
            style={{ width: width, flexShrink: "unset" }}
        >
            <input type="checkbox" ref={ref} className="checkbox" onChange={(e) => onUpdate(e.target.value, row)} />
        </div>
    );
};

const LeadItem = ({
    width,
    text,
    left,
    align,
    textLeft,
    link,
    click,
    route,
    onClick,
    color,
    weight,
}: any) => {
    return (
        <div
            className={`flex items-center h-[20px] shrink-0`}
            style={{ width: width, marginLeft: left }}
        >
            {link ? (
                <a
                    className=" text-[13px] tracking-wide"
                    style={{
                        textAlign: align && "center",
                        marginLeft: textLeft && `${textLeft}px`,
                        color: color ? color : "#8A9099",
                    }}
                >
                    {text ? text : "-"}
                </a>
            ) : (
                <p
                    className="text-[13px] tracking-wide cursor-pointer"
                    style={{
                        textAlign: align && "center",
                        marginLeft: textLeft && `${textLeft}px`,
                        color: color ? color : "#8A9099",
                        fontWeight: weight ? weight : 500,
                    }}
                    onClick={() => { }}
                >
                    {text ? text : "-"}
                </p>
            )}
        </div>
    );
};

const RenderHeaderColumn = ({
    width,
    left,
    text,
    align,
    sort,
    onClick,
    showArrowDown,
    show,
}: any) => {
    if (show) {
        return (
            <div
                className={`flex items-center h-[20px] shrink-0`}
                style={{ width: width, marginLeft: left }}
            >
                {/* change the color from #000 to #222 */}
                <p
                    className="text-[#222] uppercase text-[12px] font-bold tracking-wider w-[100%] "
                    style={{
                        textAlign: align && "center",
                    }}
                >
                    {text}
                </p>
                {showArrowDown && (
                    <Image
                        src={getBasicIcon("Arrow Down 3")}
                        width={20}
                        className="ml-[3px] cursor-pointer"
                        height={20}
                        alt=""
                        onClick={() => {
                            if (onClick) {
                                onClick();
                            }
                        }}
                    />
                )}
            </div>
        );
    } else {
        return null;
    }
};

const RenderHeader = ({
    columns,
    rows,
    handleSelection,
}: {
    selectAll?: boolean,
    columns?: any,
    rows?: any,
    handleSelection?: any,
}) => {
    const onSelection = (checked: boolean) => {
        handleSelection(checked)
    };

    return (
        <div className='pl-[10px] min-h-[40px] flex items-center grow border-[#ccc] border-b-[1px]'>
            <RenderCheckBox width={30} onUpdate={onSelection} />
            {columns?.map((column: any, index: number) => (
                <RenderHeaderColumn
                    key={index}
                    width={column?.width}
                    left={column?.left}
                    text={column?.text}
                    show={column?.checked}
                />
            ))}
        </div>
    )
};


const RenderRowItem = ({
    text,
    subText,
    width,
    left,
    type, // PRICE, DATETIME, DATE, TIME
    currency,
    show,
}: {
    text?: string,
    subText?: string,
    width?: any,
    left?: any,
    type?: string,
    currency?: string,
    show?: boolean,
}) => {
    if (show) {
        return (
            <div
                className={`flex-col min-h-[20px] shrink-0`}
                style={{ width: width, marginLeft: left }}
            >
                <span className='text-black'>{text}</span>
                <span className='text-[#666]'>{subText}</span>
            </div>
        );
    } else {
        return null;
    }
};


const RenderRow = ({
    rows,
    columns,
    handleSelection,
}: {
    rows?: any,
    columns?: any,
    handleSelection?: any,
}) => {
    const onSelection = (checked: boolean, row: any) => {
        handleSelection(checked, row);
    };

    return (
        rows?.map((row: any, rowIndex: number) => (
            <div key={rowIndex} className='pl-[10px] min-h-[40px] flex items-center grow border-[#ccc] border-b-[1px]'>
                <RenderCheckBox width={30} onUpdate={onSelection} row={row} />
                {row?.map((rowItem: any, itemIndex: number) => (
                    <RenderRowItem
                        key={itemIndex}
                        text={rowItem?.text}
                        subText={rowItem?.subText}
                        width={columns?.[itemIndex]?.width}
                        left={columns?.[itemIndex]?.left}
                        show={columns?.[itemIndex]?.checked}
                    />
                ))}
            </div>
        ))
    );
};


const Table = ({
    columns,
    rows,
    handleSelection,
}: {
    columns?: any,
    rows?: any,
    handleSelection?: any,
}) => {
    return (
        <div className='w-[100%] mt-[20px]'>
            <RenderHeader selectAll={false} columns={columns} handleSelection={handleSelection} />
            <RenderRow rows={rows} columns={columns} handleSelection={handleSelection} />
        </div>
    )
}

export default Table