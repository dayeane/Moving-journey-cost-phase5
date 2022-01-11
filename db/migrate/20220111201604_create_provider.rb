class CreateProvider < ActiveRecord::Migration[6.1]
  def change
    create_table :providers do |t|
      t.string :name
      t.date :date
      t.references :trip
      t.string :note

      t.timestamps
    end
  end
end
