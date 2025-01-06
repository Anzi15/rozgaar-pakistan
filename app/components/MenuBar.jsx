import { Fragment } from "react";
import { FaBold, FaCode, FaHighlighter, FaItalic, FaLevelDownAlt, FaParagraph, FaQuoteLeft, FaRedo, FaStrikethrough, FaUndo, FaYoutube } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";
import { LuHeading1, LuHeading2 } from "react-icons/lu";
import { MdFormatListBulleted, MdOutlineHorizontalRule } from "react-icons/md";
import MenuItem from "./MenuItem.jsx";

export default function MenuBar({ editor }) {
  const items = [
    {
      icon: <FaBold />,
      title: <FaBold />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleBold().run();
      },
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: <FaItalic />,
      title: <FaItalic />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleItalic().run();
      },
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: <FaStrikethrough />,
      title: <FaStrikethrough />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleStrike().run();
      },
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: <FaCode />,
      title: <FaCode />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleCode().run();
      },
      isActive: () => editor.isActive("code"),
    },
    {
      icon: <FaHighlighter />,
      title: <FaHighlighter />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleHighlight().run();
      },
      isActive: () => editor.isActive("highlight"),
    },
    {
      icon: <LuHeading1 />,
      title: <LuHeading1 />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleHeading({ level: 1 }).run();
      },
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <LuHeading2 />,
      title: <LuHeading2 />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleHeading({ level: 2 }).run();
      },
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <FaParagraph />,
      title: <FaParagraph />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().setParagraph().run();
      },
      isActive: () => editor.isActive("paragraph"),
    },
    {
      icon: <MdFormatListBulleted />,
      title: <MdFormatListBulleted />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleBulletList().run();
      },
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: <GoListOrdered />,
      title: <GoListOrdered />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleOrderedList().run();
      },
      isActive: () => editor.isActive("orderedList"),
    },
    {
      icon: <FaQuoteLeft />,
      title: <FaQuoteLeft />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().toggleBlockquote().run();
      },
      isActive: () => editor.isActive("blockquote"),
    },
    {
      icon: <MdOutlineHorizontalRule />,
      title: <MdOutlineHorizontalRule />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().setHorizontalRule().run();
      },
    },
    {
      icon: <FaYoutube />,
      title: <FaYoutube />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        const url = prompt("Enter YouTube video URL");
        const videoId = extractYouTubeVideoId(url);
        if (videoId) {
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          editor.chain().focus().setIframe({ src: embedUrl }).run();
        } else {
          alert("Invalid YouTube URL");
        }
      },
    },
    {
      icon: <FaLevelDownAlt />,
      title: <FaLevelDownAlt />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().setHardBreak().run();
      },
    },
    {
      icon: <FaUndo />,
      title: <FaUndo />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().undo().run();
      },
    },
    {
      icon: <FaRedo />,
      title: <FaRedo />,
      action: (event) => {
        event.stopPropagation(); // Prevent form submission
        editor.chain().focus().redo().run();
      },
    },
  ];

  return (
    <div className="editor__header flex gap-3">
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === "divider" ? (
            <div className="divider p-2" />
          ) : (
            <MenuItem {...item} />
          )}
        </Fragment>
      ))}
    </div>
  );
}