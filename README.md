
## **TypeScript 글로벌 설치**

npm을 사용하여 TypeScript를 글로벌로 설치합니다. 이렇게 하면, 시스템 전체에서 TypeScript 컴파일러(tsc)를 사용할 수 있습니다.

1. **터미널 또는 명령 프롬프트에서 다음 명령어 실행**:
   ```bash
   npm install -g typescript
   ```
   - 여기서 `-g` 옵션은 TypeScript를 글로벌로 설치한다는 의미입니다.

2. **설치 확인**:
   - TypeScript가 제대로 설치되었는지 확인하려면 다음 명령어를 실행하여 버전을 확인합니다:
   ```bash
   tsc -v
   ```
   - TypeScript 버전이 출력되면, 설치가 성공적으로 완료된 것입니다.

## **TypeScript 파일 컴파일**

TypeScript 파일을 작성하고 컴파일해봅니다.

1. **TypeScript 파일 생성**:
   - 프로젝트 폴더를 하나 생성하고, `hello.ts`라는 파일을 만듭니다.
   - `hello.ts` 파일에 다음과 같은 코드를 작성합니다:
     ```typescript
     const greet = (name: string): string => {
       return `Hello, ${name}!`;
     };

     console.log(greet("World"));
     ```

2. **TypeScript 파일 컴파일**:
   - 터미널에서 해당 폴더로 이동한 후, 다음 명령어를 사용하여 TypeScript 파일을 컴파일합니다:
   ```bash
   tsc hello.ts
   ```
   - 컴파일이 완료되면, 같은 폴더에 `hello.js` 파일이 생성됩니다.

3. **JavaScript 파일 실행**:
   - 컴파일된 JavaScript 파일을 Node.js로 실행합니다:
   ```bash
   node hello.js
   ```
   - `Hello, World!`라는 메시지가 출력됩니다.

