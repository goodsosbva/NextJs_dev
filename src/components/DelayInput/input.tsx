import React, { useState, useCallback, useRef } from "react";

type DelayButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const DelayInput = (props: DelayButtonProps) => {
  const { onChange } = props;
  const [isTrying, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [viewValue, setViewValue] = useState("");

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handelChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsTyping(true);
      setInputValue(e.target.value);

      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        timerRef.current = null;

        setIsTyping(false);
        setViewValue(e.target.value);
        onChange(e);
      }, 1000);
    },
    [onChange]
  );

  const text = isTrying ? "입력 중..." : `입력한 텍스트: ${viewValue} `;

  return (
    <div>
      <input
        data-testid="input-text"
        value={inputValue}
        onChange={handelChange}
      ></input>
      <span data-testid="display-text">{text}</span>
    </div>
  );
};
