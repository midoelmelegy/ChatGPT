import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";

const ar: PartialLocaleType = {
  WIP: "الميزة لا تزال قيد التطوير...",
  Error: {
    Unauthorized:
      "الوصول غير مصرّح به الآن، يُرجى إدخال رمز التفويض في صفحة الإعدادات.",
  },
  Auth: {
    Title: "كلمة المرور مطلوبة",
    Tips: "قام المسؤول بتمكين التحقق من كلمة المرور ، يرجى ملء رمز الوصول أدناه",
    Input: "املأ رمز الوصول هنا",
    Confirm: "أكد",
    Later: "لاحقا",
  },
  ChatItem: {
    ChatItemCount: (count: number) => ` ${count} محادثات, `,
  },
  Chat: {
    SubTitle: (count: number) => `${count} محادثات مع ChatGPT,`,
    Actions: {
      ChatList: "عرض قائمة الرسائل",
      CompressedHistory: "عرض السجل المضغوط لـ Prompt",
      Export: "تصدير سجل المحادثة",
      Copy: "نسخ",
      Stop: "إيقاف",
      Retry: "إعادة المحاولة",
      Delete: "حذف",
    },
    InputActions: {
      Stop: "توقف عن الرد",
      ToBottom: "لفة إلى الأحدث",
      Theme: {
        auto: "تلقائي",
        light: "فاتح",
        dark: "داكن",
      },
      Prompt: "الأمر",
      Masks: "الأقنعة",
      Clear: "جلي",
      Settings: "قائمة الإعدادات",
    },
    Rename: "إعادة تسمية المحادثة",
    Typing: "يكتب...",
    Input: (submitKey: string) => {
      var inputHints = ` أدخل الرسالة، ${submitKey} للإرسال`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "، Shift + Enter للسطر الجديد";
      }
      return inputHints + "，/ شغّل الإكمال";
    },
    Send: "إرسال",
    Config: {
      Reset: "مسح الذاكرة",
      SaveAs: "حفظ القناع",
    },
  },
  Export: {
    Title: "تصدير سجل المحادثة إلى Markdown",
    Copy: "نسخ الكل",
    Download: "تحميل الملف",
    Share: "شارك ShareGPT",
    MessageFromYou: "رسالة منك",
    MessageFromChatGPT: "رسالة من ChatGPT",
    Format: {
        Title: "تنسيق التصدير",
        SubTitle: "يمكن التصدير Markdown أو نص PNG صورة",
      },
      IncludeContext: {
        Title: "العنوان",
        SubTitle: "العنوان الفرعي",
      },
      Steps: {
        Select: "اختار",
        Preview: "المعاينة",
      },
    },
    Select: {
      Search: "البحث",
      All: "الجميع",
      Latest: "الأحدث",
      Clear: "مسح",
    },
    Memory: {
    Title: "الذاكرة التاريخية",
    EmptyContent: "لا يوجد ذاكرة حتى الآن",
    Copy: "نسخ الكل",
  },
  Home: {
    NewChat: "محادثة جديدة",
    DeleteChat: "هل تريد حذف المحادثة المحددة؟",
  },

  Settings: {
    Title: "الإعدادات",
    SubTitle: "خيارات الإعداد",
    Actions: {
      ClearAll: "مسح جميع البيانات",
      ResetAll: "إعادة تعيين جميع الخيارات",
      Close: "إغلاق",
      ConfirmResetAll: "هل أنت متأكد من إعادة تعيين كافة التكوينات؟",
      ConfirmClearAll: "هل أنت متأكد من مسح كافة البيانات؟",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "كل اللغات",
    },
    Avatar: "الصورة الرمزية",
    FontSize: {
      Title: "حجم الخط",
      SubTitle: "ضبط حجم الخط لمحتوى الدردشة",
    },
    Update: {
      Version: (x: string) => `الإصدار الحالي: ${x}`,
      IsLatest: "أنت على أحدث إصدار",
      CheckUpdate: "التحقق من التحديثات",
      IsChecking: "جارٍ التحقق من التحديثات...",
      FoundUpdate: (x: string) => `تم العثور على إصدار جديد: ${x}`,
      GoToUpdate: "الانتقال إلى التحديث",
    },
    SendKey: "مفتاح الإرسال",
    Theme: "السمة",
    TightBorder: "حدود متراصة",
    SendPreviewBubble: {
        Title: "معاينة الفقاعة",
        SubTitle: "معاينة محتوى Markdown في الفقاعة",
      },
    Mask: {
      Title: "صفحة إطلاق القناع",
      SubTitle: "عند إنشاء محادثة جديدة ، قم بإظهار صفحة بدء القناع",
    },
    Prompt: {
      Disable: {
        Title: "تعطيل الإكمال التلقائي للكلمات الموجهة",
        SubTitle: "اكتب / في بداية المربع لتفعيل الإكمال التلقائي",
      },
      List: "قائمة الكلمات الموجهة المخصصة",
      ListCount: (builtin: number, custom: number) =>
        `مدمج ${builtin} ، تعريف المستخدم ${custom}`,
      Edit: "تحرير",
      Modal: {
        Title: "قائمة الكلمات السريعة",
        Add: "بناء جديد",
        Search: "كلمة البحث الفوري",
      },
      EditModal: {
        Title: "تحرير عنوان النموذج",
      },
    },
    HistoryCount: {
      Title: "عدد الرسائل  المرفقة",
      SubTitle: "عدد الرسائل المرفقة مع كل طلب",
    },
    CompressThreshold: {
      Title: "عتبة ضغط طول الرسائل",
      SubTitle: "سيتم ضغطه إذا تجاوزت طول الرسائل غير المضغوطة القيمة",
    },
    Token: {
      Title: "API Key",
      SubTitle: "استخدام مفتاحك الخاص لتجاوز قيود الوصول المصرح به",
      Placeholder: "OpenAI API Key",
    },
    Usage: {
      Title: "رصيد الحساب",
      SubTitle(used: any) {
        return `تم استخدام ${used}$ هذا الشهر`;
      },
      IsChecking: "جارٍ التحقق...",
      Check: "إعادة التحقق",
      NoAccess: "أدخل مفتاح API لعرض الرصيد",
    },

    AccessCode: {
      Title: "رمز التفويض",
      SubTitle: "الوصول غير مصرّح به حاليًا",
      Placeholder: "يرجى إدخال رمز التفويض",
    },
    Model: "النموذج (model)",
    Temperature: {
      Title: "العشوائية (temperature)",
      SubTitle: "كلما زادت القيمة، زادت العشوائية في الردود",
    },
    MaxTokens: {
      Title: "الحد الأقصى للرموز في الرد الواحد (max_tokens)",
      SubTitle: "أقصى عدد من الرموز المستخدمة في التفاعل الواحد",
    },
    PresencePenalty: {
      Title: "جدة الموضوع (presence_penalty)",
      SubTitle: "كلما زادت القيمة، زادت احتمالية التوسع إلى مواضيع جديدة",
    },
  },
  Store: {
    DefaultTopic: "محادثة جديدة",
    BotHello: "كيف يمكنني مساعدتك",
    Error: "حدث خطأ، الرجاء المحاولة مرة أخرى لاحقًا",
    Prompt: {
      History: (content: string) =>
        "هذا ملخص التفاعلات السابقة بين المستخدم والذكاء الاصطناعي كما يلي: " +
        content,
      Topic:
        "استخدم أربعة إلى خمسة كلمات للإشارة إلى الموضوع الرئيسي للجملة، بدون شرح أو علامات ترقيم أو كلمات عاطفية أو نص إضافي. إذا لم يكن هناك موضوع رئيسي، الرجاء إرسال 'دردشة عامة'",
      Summarize:
        "قم بتلخيص المحادثة بينك وبين المستخدم بإيجاز كما يلي، واحتفظ بها في إطار 200 كلمة",
    },
  },
  Copy: {
    Success: "تم النسخ إلى الحافظة",
    Failed: "فشل النسخ، الرجاء منح الإذن للوصول إلى الحافظة",
  },
  Context: {
    Toast: (x: any) => `تم تعيين ${x} من السياقات السابقة`,
    Edit: "السياقات السابقة والذاكرة ",
    Add: "إضافة جديدة",
    Clear: "تم مسح السياق",
    Revert: "استعادة السياق",
  },
  Plugin: {
    Name: "البرامج",
  },
  Mask: {
    Name: "القناع",
    Page: {
      Title: "قناع الشخصية الافتراضي",
      SubTitle: (count: number) => `${count} تعريفات الدور الافتراضي`,
      Search: "أقنعة البحث الشخصية",
      Create: "بناء جديد",
    },
    Item: {
      Info: (count: number) => `يشمل ${count} حوار محدد مسبقًا`,
      Chat: "حوار",
      View: "عرض الحوار",
      Edit: "تعديل",
      Delete: "حذف",
      DeleteConfirm: "تأكيد الحذف؟",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `تحرير الأقنعة المعدة مسبقًا ${readonly ? "（يقرأ فقط）" : ""}`,
      Download: "تحميل",
      Clone: "استنساخ",
    },
    Config: {
      Avatar: "الصورة الرمزية",
      Name: "اسم الدور",
      Sync: {
        Title: "استخدم الإعدادات العامة",
        SubTitle: "ما إذا كان مربع الحوار الحالي يستخدم إعدادات النموذج العام",
        Confirm: "ستتم الكتابة فوق الإعدادات المخصصة لمربع الحوار الحالي تلقائيًا. هل أنت متأكد من تمكين الإعدادات العامة؟",
      },
      HideContext: {
        Title: "إخفاء الحوار الافتراضي",
        SubTitle: "بعد الاختباء ، لن يظهر حوار الإعداد المسبق في واجهة الدردشة",
      },
    },
  },
  NewChat: {
    Return: "العودة",
    Skip: "ابدأ مباشرة",
    NotShow: "لا تظهر",
    ConfirmNoShow: "هل تريد التأكيد للتعطيل؟ بمجرد تعطيله يمكن إعادة تمكينه في أي وقت في الإعدادات.",
    Title: "اختر قناعًا",
    SubTitle: "ابدأ الآن ، اصطدم بالروح التي تفكر خلف القناع",
    More: "عرض كل شيء",
  },

  UI: {
    Confirm: "أكد",
    Cancel: "إلغاء",
    Close: "إغلاق",
    Create: "بناء جديد",
    Edit: "تصحيح",
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
export type LocaleType = DeepPartial<typeof ar>;
export type RequiredLocaleType = typeof ar;

export default ar;