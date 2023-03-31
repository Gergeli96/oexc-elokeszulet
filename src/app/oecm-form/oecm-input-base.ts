import { ControlValueAccessor } from '@angular/forms';

export class OecmInputBase implements ControlValueAccessor {
    public disabled = false
	public touched = false
	public value: any

    public onTouched = () => { }
	public onChange = (value: any) => { }
	public writeValue(value: any) {
		this.value = value
	}
	public registerOnChange(onChange: any) {
		this.onChange = onChange
	}
	public registerOnTouched(onTouched: any) {
		this.onTouched = onTouched
	}
	public setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled
	}
	public markAsTouched() {
		if (!this.touched) {
			this.onTouched()
			this.touched = true
		}
	}
}
