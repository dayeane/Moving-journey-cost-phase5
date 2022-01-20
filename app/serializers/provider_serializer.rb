class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :note, :cost
end
