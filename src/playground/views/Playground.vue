<script setup lang="ts">
import ComponentWrapper from '@/playground/components/ComponentWrapper.vue'

import AccordionDefault from '@/playground/components/accordion/AccordionDefault.vue'

import AlertDefault from '@/playground/components/alert/AlertDefault.vue'
import CustomStyleAlert from '@/playground/components/alert/CustomStyleAlert.vue'
import DescriptionOnlyAlert from '@/playground/components/alert/DescriptionOnlyAlert.vue'
import DestructiveAlert from '@/playground/components/alert/DestructiveAlert.vue'
import DetailedDestructiveAlert from '@/playground/components/alert/DetailedDestructiveAlert.vue'
import NoTitleAlert from '@/playground/components/alert/NoTitleAlert.vue'
import SuccessAlert from '@/playground/components/alert/SuccessAlert.vue'
import VeryLongDescriptionAlert from '@/playground/components/alert/VeryLongDescriptionAlert.vue'
import VeryLongTitleAlert from '@/playground/components/alert/VeryLongTitleAlert.vue'
import VeryLongTitleAndDescriptionAlert from '@/playground/components/alert/VeryLongTitleAndDescriptionAlert.vue'
import WithCTAButton from '@/playground/components/alert/WithCTAButton.vue'
import WithoutDescriptionAlert from '@/playground/components/alert/WithoutDescriptionAlert.vue'

import AlertDialogDefault from '@/playground/components/alert-dialog/AlertDialogDefault.vue'

import AspectRatioDefault from '@/playground/components/aspect-ratio/AspectRatioDefault.vue'
import AspectRatioVariant from '@/playground/components/aspect-ratio/AspectRatioVariant.vue'

import AvatarCustomSize from '@/playground/components/avatar/AvatarCustomSize.vue'
import AvatarDefault from '@/playground/components/avatar/AvatarDefault.vue'
import AvatarDefaultFallback from '@/playground/components/avatar/AvatarDefaultFallback.vue'
import AvatarGroup1 from '@/playground/components/avatar/AvatarGroup1.vue'
import AvatarGroup2 from '@/playground/components/avatar/AvatarGroup2.vue'
import AvatarGroup3 from '@/playground/components/avatar/AvatarGroup3.vue'
import AvatarSquare from '@/playground/components/avatar/AvatarSquare.vue'

import BadgesDemo from '@/playground/components/badge/BadgesDemo.vue'

import BreadcrumbCollapsed from '@/playground/components/breadcrumb/BreadcrumbCollapsed.vue'
import BreadcrumbDefault from '@/playground/components/breadcrumb/BreadcrumbDefault.vue'
import BreadcrumbWithCustomSeparator from '@/playground/components/breadcrumb/BreadcrumbWithCustomSeparator.vue'
import BreadcrumbWithDropdown from '@/playground/components/breadcrumb/BreadcrumbWithDropdown.vue'

import ButtonsDemo from '@/playground/components/button/ButtonsDemo.vue'
import FormButtons from '@/playground/components/button/FormButtons.vue'

import CalendarDefault from '@/playground/components/calendar/CalendarDefault.vue'
import RangeCalendarDefault from '@/playground/components/range-calendar/RangeCalendarDefault.vue'
import RangeCalendarTwoMonths from '@/playground/components/range-calendar/RangeCalendarTwoMonths.vue'

import CardLogin from '@/playground/components/card/CardLogin.vue'
import CardsDemo from '@/playground/components/card/CardsDemo.vue'
import MeetingNotesCard from '@/playground/components/card/MeetingNotesCard.vue'
import WithImageCard from '@/playground/components/card/WithImageCard.vue'

import CardWithForm from '@/playground/components/card/CardWithForm.vue'
import NotificationCard from '@/playground/components/card/NotificationCard.vue'

import CheckboxesDemo from '@/playground/components/checkbox/CheckboxesDemo.vue'

import CheckboxArrayInput from '@/playground/components/checkbox/CheckboxArrayInput.vue'
import CheckboxDefault from '@/playground/components/checkbox/CheckboxDefault.vue'
import CheckboxWithForm from '@/playground/components/checkbox/CheckboxWithForm.vue'

import CollapsibleDefault from '@/playground/components/collapsible/CollapsibleDefault.vue'

import ComboboxDemo1 from '@/playground/components/combobox/ComboboxDemo1.vue'
import ComboboxDemo2 from '@/playground/components/combobox/ComboboxDemo2.vue'

import CommandWithDialog from '@/playground/components/command/CommandWithDialog.vue'

import ContextMenuDefault from '@/playground/components/context-menu/ContextMenuDefault.vue'

import DatePickerDemo1 from '@/playground/components/date-picker/DatePickerDemo1.vue'
import DatePickerDemo2 from '@/playground/components/date-picker/DatePickerDemo2.vue'

import DialogWithForm from '@/playground/components/dialog/DialogWithForm.vue'
import DialogWithInlineInputs from '@/playground/components/dialog/DialogWithInlineInputs.vue'
import DialogWithScrollableBody from '@/playground/components/dialog/DialogWithScrollableContent.vue'
import DialogWithScrollableOverlay from '@/playground/components/dialog/DialogWithScrollableOverlay.vue'

import DrawerBasic from '@/playground/components/drawer/DrawerBasic.vue'
import DrawerDefault from '@/playground/components/drawer/DrawerDefault.vue'
import DrawerWithScrollableContent from '@/playground/components/drawer/DrawerWithScrollableContent.vue'

import DropdownDefault from '@/playground/components/dropdown/DropdownDefault.vue'
import DropdownMenuAvatarOnly from '@/playground/components/dropdown/DropdownMenuAvatarOnly.vue'
import DropdownMenuIconButton from '@/playground/components/dropdown/DropdownMenuIconButton.vue'
import DropdownMenuWithAvatar from '@/playground/components/dropdown/DropdownMenuWithAvatar.vue'
import DropdownWithCheckboxes from '@/playground/components/dropdown/DropdownWithCheckboxes.vue'
import DropdownWithRadioGroup from '@/playground/components/dropdown/DropdownWithRadioGroup.vue'

import FormDemo from '@/playground/components/form/FormDemo.vue'

import HoverCardDemo from '@/playground/components/hover-card/HoverCardDemo.vue'

import InputDemo from '@/playground/components/input/InputDemo.vue'

import LabelDemo from '@/playground/components/label/LabelDemo.vue'

import MenubarDemo from '@/playground/components/menubar/MenubarDemo.vue'

import NavigationMenuDemo from '@/playground/components/navigation-menu/NavigationMenuDemo.vue'

import PaginationDemo from '@/playground/components/pagination/PaginationDemo.vue'

import PinInputDemo from '@/playground/components/pin-input/PinInputDemo.vue'

import PopoverDemo from '@/playground/components/popover/PopoverDemo.vue'

import ProgressDemo from '@/playground/components/progress/ProgressDemo.vue'

import RadioGroupDemo from '@/playground/components/radio-group/RadioGroupDemo.vue'

import ResizableDemo from '@/playground/components/resizable/ResizableDemo.vue'

import ScrollAreaDemo from '@/playground/components/scroll-area/ScrollAreaDemo.vue'

import SelectDemo from '@/playground/components/select/SelectDemo.vue'

import SeparatorDemo from '@/playground/components/separator/SeparatorDemo.vue'

import SheetDemo from '@/playground/components/sheet/SheetDemo.vue'

import SkeletonDemo from '@/playground/components/skeleton/SkeletonDemo.vue'

import SliderDemo from '@/playground/components/slider/SliderDemo.vue'
</script>

<template>
  <div class="@container grid flex-1 gap-4 p-4">
    <ComponentWrapper name="Accordion">
      <div class="grid w-full max-w-xl gap-4">
        <AccordionDefault />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Alert">
      <div class="grid max-w-xl items-start gap-4">
        <AlertDefault />
        <SuccessAlert />
        <NoTitleAlert />
        <DescriptionOnlyAlert />
        <WithoutDescriptionAlert />
        <VeryLongTitleAlert />
        <VeryLongDescriptionAlert />
        <VeryLongTitleAndDescriptionAlert />
        <DestructiveAlert />
        <DetailedDestructiveAlert />
        <WithCTAButton />
        <CustomStyleAlert />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Alert Dialog">
      <AlertDialogDefault />
    </ComponentWrapper>

    <ComponentWrapper name="Aspect Ratio">
      <div class="grid w-full max-w-sm items-start gap-4">
        <AspectRatioDefault />
        <AspectRatioVariant />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Avatar">
      <div class="flex flex-row flex-wrap items-center gap-4">
        <AvatarDefault />
        <AvatarDefaultFallback />
        <AvatarCustomSize />
        <AvatarSquare />
        <AvatarGroup1 />
        <AvatarGroup2 />
        <AvatarGroup3 />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Badge">
      <BadgesDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Breadcrumb">
      <div class="flex flex-col gap-4">
        <BreadcrumbDefault />
        <BreadcrumbWithCustomSeparator />
        <BreadcrumbWithDropdown />
        <BreadcrumbCollapsed />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Button">
      <ButtonsDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Form Button">
      <FormButtons />
    </ComponentWrapper>

    <ComponentWrapper name="Calendar">
      <div class="flex flex-col flex-wrap items-start gap-2 md:flex-row">
        <CalendarDefault />
        <RangeCalendarDefault />
        <RangeCalendarTwoMonths />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Card">
      <div className="flex flex-col items-start gap-4">
        <CardLogin />
        <MeetingNotesCard />
        <WithImageCard />
        <CardsDemo />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Card With Form">
      <div class="flex flex-wrap gap-4">
        <CardWithForm />
        <NotificationCard />
      </div>
    </ComponentWrapper>

    <!-- TODO: Carousel -->

    <ComponentWrapper name="Checkbox">
      <CheckboxesDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Checkbox With Form">
      <div className="flex flex-col gap-6">
        <CheckboxDefault />
        <CheckboxWithForm />
        <CheckboxArrayInput />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Collapsible">
      <CollapsibleDefault />
    </ComponentWrapper>

    <ComponentWrapper name="Combobox">
      <ComboboxDemo1 />
      <ComboboxDemo2 />
    </ComponentWrapper>

    <!-- FIXME: Command  -->
    <ComponentWrapper name="Command">
      <CommandWithDialog />
    </ComponentWrapper>

    <ComponentWrapper name="Context Menu">
      <ContextMenuDefault />
    </ComponentWrapper>

    <ComponentWrapper name="Date Picker">
      <div class="flex flex-col items-start gap-4 md:flex-row">
        <DatePickerDemo1 />
        <DatePickerDemo2 />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Dialog">
      <div class="flex flex-col items-start gap-4 md:flex-row">
        <DialogWithForm />
        <DialogWithInlineInputs />
        <DialogWithScrollableBody />
        <DialogWithScrollableOverlay />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Drawer">
      <DrawerBasic />
      <DrawerDefault />
      <DrawerWithScrollableContent />
    </ComponentWrapper>

    <ComponentWrapper name="Dropdown Menu">
      <div className="flex flex-wrap items-start gap-4">
        <DropdownDefault />
        <DropdownWithCheckboxes />
        <DropdownWithRadioGroup />
        <DropdownMenuWithAvatar />
        <DropdownMenuAvatarOnly />
        <DropdownMenuIconButton />
      </div>
    </ComponentWrapper>

    <ComponentWrapper name="Form">
      <FormDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Hover Card">
      <HoverCardDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Input">
      <InputDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Label">
      <LabelDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Menubar">
      <MenubarDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Navigation Menu">
      <NavigationMenuDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Pagination">
      <PaginationDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Pin Input">
      <PinInputDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Popover">
      <PopoverDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Progress">
      <ProgressDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Radio Group">
      <RadioGroupDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Resizable">
      <ResizableDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Scroll Area">
      <ScrollAreaDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Select">
      <SelectDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Separator">
      <SeparatorDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Sheet">
      <SheetDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Skeleton">
      <SkeletonDemo />
    </ComponentWrapper>

    <ComponentWrapper name="Slider">
      <SliderDemo />
    </ComponentWrapper>
  </div>

  <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <div class="aspect-video rounded-xl bg-muted/50" />
      <div class="aspect-video rounded-xl bg-muted/50" />
      <div class="aspect-video rounded-xl bg-muted/50" />
    </div>
    <div class="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
  </div>
</template>
