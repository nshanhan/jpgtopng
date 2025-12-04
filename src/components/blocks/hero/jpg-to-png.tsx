"use client";

import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, CreditCard } from "lucide-react";

const MAX_FILE_SIZE = 40 * 1024 * 1024; // 40MB

const isJpgFile = (file: File) => {
  const lowerName = file.name.toLowerCase();
  return (
    file.type === "image/jpeg" ||
    lowerName.endsWith(".jpg") ||
    lowerName.endsWith(".jpeg")
  );
};

const convertJpgToPng = (file: File) => {
  return new Promise<Blob>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("无法创建画布上下文"));
        URL.revokeObjectURL(url);
        return;
      }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(url);
          if (!blob) {
            reject(new Error("生成 PNG 失败"));
            return;
          }
          resolve(blob);
        },
        "image/png",
        1
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("图片加载失败"));
    };
    img.src = url;
  });
};

const triggerDownload = (blob: Blob, originName: string) => {
  const baseName = originName.replace(/\.[^.]+$/, "");
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = `${baseName || "converted"}.png`;
  link.click();
  URL.revokeObjectURL(downloadUrl);
};

export default function JpgToPngUploader({
  upLoadButton,
}: {
  upLoadButton: any;
}) {
  const [dragActive, setDragActive] = useState(false);
  const [info, setInfo] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = useCallback(async (fileList: FileList | null) => {
    if (!fileList || !fileList.length) return;
    const file = fileList[0];
    if (!isJpgFile(file)) {
      setInfo(upLoadButton.tit13);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setInfo(upLoadButton.tit14);
      return;
    }
    try {
      setIsConverting(true);
      setInfo(upLoadButton.tit15);
      const blob = await convertJpgToPng(file);
      triggerDownload(blob, file.name);
      setInfo(upLoadButton.tit11);
    } catch (error) {
      console.error(error);
      setInfo(upLoadButton.tit16);
    } finally {
      setIsConverting(false);
    }
  }, []);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files);
    event.target.value = "";
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
    handleFiles(event.dataTransfer.files);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!dragActive) setDragActive(true);
  };

  const onDragLeave = () => {
    setDragActive(false);
  };

  return (
    <div className="w-full">
      <div
        className={cn(
          "rounded-[32px] p-6 shadow-lg bg-gradient-to-b from-white to-white/80"
        )}
      >
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={cn(
            "rounded-[28px] border-3 border-dashed px-8 py-12 text-center transition-colors",
            dragActive
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/40 bg-white"
          )}
        >
          <p className="text-2xl md:text-[28px] font-bold text-primary ">
            {upLoadButton.tit1}
          </p>
          <p className="text-2xl md:text-[28px] font-bold ">
            <button
              type="button"
              className=" text-[#3B2E7E]"
              onClick={() => inputRef.current?.click()}
            >
              {upLoadButton.tit2}
            </button>
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button
              onClick={() => inputRef.current?.click()}
              className="rounded-full px-10 py-6 text-base font-semibold bg-[#6845FF] hover:bg-[#5a38f0]"
              disabled={isConverting}
            >
              {isConverting ? upLoadButton.tit12 : upLoadButton.tit3}
            </Button>
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg"
              onChange={onInputChange}
              hidden
            />
            <p className="text-sm text-muted-foreground">{upLoadButton.tit4}</p>
            <div className="flex items-center gap-6 text-sm text-[#6845FF]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                {upLoadButton.tit5}
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                {upLoadButton.tit6}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        {upLoadButton.tit7}
        <a href="/terms-of-service" className="text-primary underline">
          {upLoadButton.tit8}
        </a>
        {upLoadButton.tit9}
        <a href="/privacy-policy" className="text-primary underline">
          {upLoadButton.tit10}
        </a>
      </p>
      {info && (
        <p className="mt-3 text-center text-sm text-muted-foreground">{info}</p>
      )}
    </div>
  );
}
