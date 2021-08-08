import {SubClass, Super} from "./MyClass.js";

const problemCount: number = 12;
let successCount: number = 0;

// ---------------------------------------------------------------------------------

// 將外面調用這方法輸入的參數改對
function staticValidation(age: number, name: string, isMale: boolean): void {
    console.log("staticValidation success");
    successCount++;
}

// ---------------------------------------------------------------------------------

// 將賦值改對
function typeInference(): void {
    let string = "1";
    string = 2;
    console.log("typeInference success");
    successCount++;
}

// ---------------------------------------------------------------------------------

// 將 any 修改成正確函數型態
let functionType: any = (): string => {
    return "functionType success";
}

// ---------------------------------------------------------------------------------

// 將外面調用這方法輸入的參數改對
function unionType(type: number | string): void {
    console.log("unionType success");
    successCount++;
}

// ---------------------------------------------------------------------------------

// 增加兩個正確的函數
function mergeFunction(id: number | string): void {
    if (id) {
        console.log("mergeFunction success");
        successCount++;
    }
}

// ---------------------------------------------------------------------------------

// 將外面調用這方法輸入的參數改對
function optionalValue(requireValue: string, optionValue: string): void {
    if (requireValue && !optionValue) {
        console.log("optionalValue success");
        successCount++;
    }
}

// ---------------------------------------------------------------------------------

// 將這方法參數改對
function multipleParameters(p: string): void {
    if (p.length > 1) {
        console.log("multipleParameter success");
        successCount++;
    }
}

// ---------------------------------------------------------------------------------

// 將這方法參數改對
function defaultValue(value: number): void {
    if (value == 20) {
        console.log("defaultValue success");
        successCount++;
    }
}

// ---------------------------------------------------------------------------------

// 將外面調用這方法輸入的參數改對
type LimitValue = 1 | 2;
function limitValue(value: LimitValue): void {
    console.log("limitValue success");
    successCount++;
}

// ---------------------------------------------------------------------------------

// 增加兩個正確的類別別名
type TypeAlias = any;
function typeAlias(typeAlias: TypeAlias) {
    if (typeof typeAlias === 'boolean') {
        if (typeAlias) {
            console.log("typeAlias success");
            successCount++;
        }
    }
    if (typeof typeAlias === 'function') {
        if (typeAlias()) {
            console.log("typeAlias success");
            successCount++;
        }
    }
}

// ---------------------------------------------------------------------------------

// 將外面調用這方法的語法改對
function asSth(): Super {
    return new Super();
}

// ---------------------------------------------------------------------------------

// 創造 .env
// 安裝並正確導入 request 和 dotenv
function api(): void {
    // https://sheltered-woodland-75654.herokuapp.com
    request.get(`${process.env.NODE_WORKSHOP_URL}/api/messages`,
        (error, response, body) => {
            console.log(body);
        });
    console.log("api success");
    successCount++;
}

main();

function main() {

// ---------------------------------------------------------------------------------

    // 靜態檢測
    staticValidation(false, 30, "true");

// ---------------------------------------------------------------------------------

    // 型別推論
    typeInference();

// ---------------------------------------------------------------------------------

    // 函數型態
    if (functionType() === "functionType success") {
        successCount++;
    }

// ---------------------------------------------------------------------------------

    // 聯合類型
    unionType(true);

// ---------------------------------------------------------------------------------

    // 函數合併
    mergeFunction(1);

// ---------------------------------------------------------------------------------

    // 可選屬性
    optionalValue("require");

// ---------------------------------------------------------------------------------

    // 任意屬性
    multipleParameters('1', '2');

// ---------------------------------------------------------------------------------

    // 預設值
    defaultValue();

// ---------------------------------------------------------------------------------

    // 限定賦值
    limitValue(3);

// ---------------------------------------------------------------------------------

    // 類別別名
    typeAlias(true);
    typeAlias(() => true);

// ---------------------------------------------------------------------------------

    // 斷言
    let as: SubClass = asSth();
    if (as.myName) {
        console.log("asSth success");
        successCount++;
    }

// ---------------------------------------------------------------------------------

    // 第三方函式庫
    api();

    if (successCount >= problemCount) {
        console.log();
        console.log("Congratulations");
    } else {
        console.log(successCount);
    }

}

